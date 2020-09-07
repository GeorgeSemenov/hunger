@echo off
set grandParentName=block
set parentName=__element
set /p fileName=What would you create?
set newStyleSCSS=block__element.scss
mkdir %fileName%
(
echo @import '%fileName%/block__element%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
