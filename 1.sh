# !/bin/bash
read -p "enter your commit message: " messagues
echo $messagues
git add --all
git commit -m "${messagues}"
git push origin