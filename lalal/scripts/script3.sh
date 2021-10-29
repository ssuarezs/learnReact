#!/bin/bash

intro="Write number: "
echo -n $intro
read valor

if [[ $valor -eq 5 ]]; then
	echo "Number is 5"
else
	echo "Number is not 5"
fi


# -gt greater than
# -ge greater or equal
# -lt lower than
# -le lower or equal
# -eq equal
# -ne not equal
