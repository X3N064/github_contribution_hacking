# Hacking your GitHub Contribution Graph!
[![GitHub issues](https://img.shields.io/github/issues/X3N064/github_contribution_hacking)](https://github.com/X3N064/github_contribution_hacking/issues)
[![GitHub stars](https://img.shields.io/github/stars/X3N064/github_contribution_hacking)](https://github.com/X3N064/github_contribution_hacking/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/X3N064/github_contribution_hacking)](https://github.com/X3N064/github_contribution_hacking/network)
<a href="https://github.com/X3N064/github_contribution_hacking/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/X3N064/github_contribution_hacking"></a><br />
![alt text](https://badges.aleen42.com/src/javascript.svg)
![alt text](https://badges.aleen42.com/src/node.svg)
![alt text](https://badges.aleen42.com/src/github.svg)
![alt text](https://badges.aleen42.com/src/visual_studio_code.svg)

## Description <br/>
I was inspired [iamrohitagg](https://github.com/iamrohitagg/GitHub_Graph)'s work which makes it possible to do something that has not been done in the past, turn lights on the contribution graph in our profile.
If you want my project working, you must ``npm install simple-git, moment, and jsonfile.`` I really recommend you to go to iamrohitagg's [youtube](https://www.youtube.com/watch?v=2q--gA97caM) and watch it properly.
<br/>
<br/>
## How to use <br/>
###### Basically I created two versions. You can either do it by randomly(.js), and specifically(.js) choose the date. <br/>
***randomly.js*** is set default as 1 year time frame. you can change it by increase **n** in .subtract( **n** , 'y') on line 11. <br/><br/>
***specifically.js***, put the **date** you want with 'YYYY-MM-DD' format in makeCommit(**'date'**) on line 18.
<br/><br/>
When everything is ready, use `node randomly.js` or `node specifically.js` on terminal to change your contribution graph.