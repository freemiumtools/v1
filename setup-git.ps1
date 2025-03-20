# Configure Git
git config --global credential.helper store
git remote remove origin
git remote add origin "https://github.com/freemiumtools/v1.git"
git branch -M main
git push -u origin main 