#!/bin/bash

## Check that an argument is present

if [ -z "$1" ]
then
    # printf "\n%s\n\n" "No argument"
    exit 1;
fi

## Remove any superfluous characters

initial=$( echo "$1" | tr -dc '[:space:][:alnum:]\\n\.' | tr -s '\n')

## Capture the initial balance

initial_balance=${initial%%$'\n'*}

## Print the initial balance

## Set the temporary variable to hold the original value

temp="${initial#*$'\n'}"

## Capture the details of each individual line

current_i=0

while [[ $temp = *$'\n'* ]]
do
    detail_array[${#detail_array[@]}]="${temp%%$'\n'*}"
    temp="${temp#*$'\n'}"
    ((++current_i))
done

detail_array[${#detail_array[@]}]="$temp"

## Capture the costs for each line

current_i=0

for i in "${detail_array[@]}"
do
    cost_array[${#cost_array[@]}]="${detail_array[$current_i]//* /}"
    detail_array[$current_i]="${detail_array[$current_i]% *}"
    (( ++current_i ))
done

## Ensure that each cost has two decimal places at the end

i=0

while [[ $i -lt ${#cost_array[@]} ]] 
do
  cost_array[$i]=$(bc <<< "scale=2; (${cost_array[$i]})/1.00")
  (( ++i ))
done

## Capture the running balance as an array after each expense

current_i=0

total_cost=0

initial_balance=$(bc <<< "scale=2; (${initial_balance})/1.00")

running_balance=( $initial_balance )

for i in "${cost_array[@]}"
do
    running_balance[${#running_balance[@]}]=$(bc <<< "scale=2; ${running_balance[$current_i]} - ${cost_array[$current_i]}")
    total_cost=$( bc <<< "scale=2; (${total_cost} + ${cost_array[$current_i]})/1.000" )
    (( ++current_i ))
done

average_cost=$(bc <<< "scale=2; ((${total_cost} + 0.02) / ${#cost_array[@]})/1.0000")

result="Original Balance: "

current_i=0

for i in "${running_balance[@]}"
do
    result+="$i"
    if [[ -n "${detail_array[$current_i]}" ]]
    then
        result+="\n"
        result+="${detail_array[$current_i]}"
        result+=" "
        result+="${cost_array[$current_i]}"
        result+=" Balance "
    fi
    (( ++current_i ))
done

result+="\nTotal expense  ${total_cost}\nAverage expense  ${average_cost}"
printf "$result"
