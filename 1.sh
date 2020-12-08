# !/bin/bash
read -p "enter your commit message: " messagues
echo $messagues
git add --all
git commit -m "${messagues}"
git push origin
# FILE="file where i write.txt"
# /bin/cat <<EOM >$FILE
# text1
# text2 # This comment will be inside of the file.
# The keyword EOM can be any text, but it must start the line and be alone.
#  EOM # This will be also inside of the file, see the space in front of EOM.
# EOM # No comments and spaces around here, or it will not work.
# text4 
# EOM