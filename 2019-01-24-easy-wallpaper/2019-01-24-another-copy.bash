#!/bin/bash
wallpaper() {
	numbers=(zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty)
	[[ $1 == 0.0 || $2 == 0.0 || $3 == 0.0 ]] && index=0 || index=$(echo "scale=16; 2*($1+$2)*$3*23/104+0.5" | bc)
	echo ${numbers[$(printf '%0.f' $index)]}
}
wallpaper $1 $2 $3
