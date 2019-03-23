#!/bin/bash

## Check that an argument is present

if [ -z "$1" ]
then
    printf "\n%s\n\n" "No argument"
    exit 1;
fi

## Remove any superfluous characters

$1="${1//[!a-zA-Z0-9\. ]/}"

## Capture the initial balance

initial_balance="${1%%\\n*}"

## Print the initial balance

    # printf "\n%-35s %-50d\n" "Initial Balance:"  "$initial_balance"

## Set the temporary variable to hold the original value

temp="${1#*\\n}"

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

running_balance=( $initial_balance )

    # printf "\n%-35s %-50s\n" "\$running_balance[$current_i]:" "${running_balance[$current_i]}"

for i in "${cost_array[@]}"
do
    running_balance[${#running_balance[@]}]=$( echo "scale=2; $running_balance[$current_i] - $cost_array[$current_i]" | bc )

        # printf "%-35s %-50s\n" "\$running_balance[$(( $current_i + 1 ))]:" "${running_balance[$(( $current_i + 1 ))]}"
    
    (( ++current_i ))
done

    # printf "%s\n" ""

result=''

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

printf "%s\n" "$result"
