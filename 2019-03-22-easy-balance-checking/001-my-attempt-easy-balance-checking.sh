#!/bin/bash

## Check that an argument is present

if [ -z "$1" ]
then
    printf "\n%s\n\n" "No argument"
    exit 1;
fi

## Remove any superfluous characters

initial=$( echo "$1" | tr -dc '[:space:][:alnum:]\\n\.' )

initial="${initial//\\n\\n/\n}"

## Capture the initial balance

initial_balance="${initial%%\\n*}"

## Print the initial balance

    # printf "\n%-35s %-50d\n" "Initial Balance:"  "$initial_balance"

## Set the temporary variable to hold the original value

temp="${initial#*\\n}"

## Print the original value

    # printf "%-35s %-50s\n\n" "\$temp:" "$temp"

## Set a new-line variable to serve in replacement commands

newline='\\n'

## Capture the details of each individual line

current_i=0

while [[ $temp = *$newline* ]]
do

        # printf "%-35s %-50s\n" "detail_array[\${#detail_array[$current_i]}]" "${temp%%\\n*}"
    
    detail_array[${#detail_array[@]}]="${temp%%\\n*}"
    temp="${temp#*\\n}"
    ((++current_i))
done

    # printf "%-35s %-50s\n\n" "detail_array[\${#detail_array[$current_i]}]" "${temp%%\\n*}"

detail_array[${#detail_array[@]}]="$temp"

## Capture the costs for each line

current_i=0

for i in "${detail_array[@]}"
do
    cost_array[${#cost_array[@]}]="${detail_array[current_i]//* /}"
    
        # printf "%-35s %-50s\n" "\$cost_array[$current_i]:" "${cost_array[$current_i]}"

    (( ++current_i ))
done

## Capture the running balance as an array after each expense

current_i=0

total_cost=0

running_balance=( $initial_balance )

    # printf "\n%-35s %-50s\n" "\$running_balance[$current_i]:" "${running_balance[$current_i]}"

for i in "${cost_array[@]}"
do

    # printf "\n%s%s\n%s%s\n\n" "running balance: " "${running_balance[$current_i]}" "cost_array: " "${cost_array[$current_i]}"

    running_balance[${#running_balance[@]}]=$(bc <<< "scale=2; ${running_balance[$current_i]} - ${cost_array[$current_i]}")
    total_cost=$( bc <<< "scale=2; ${total_cost} + ${cost_array[$current_i]}" )
    (( ++current_i ))
done

average_cost=$(bc <<< "scale=2; ${total_cost} / ${#cost_array[@]}")

result="Original Balance: "

current_i=0

for i in "${running_balance[@]}"
do
    result+="$i"
    if [[ -n "${detail_array[$current_i]}" ]]
    then
        result+="\n"
        result+="${detail_array[$current_i]} "
    fi
    (( ++current_i ))
done

result+="\nTotal expense  ${total_cost}\nAverage expense  ${average_cost}"
printf "%s\n" "$result"
