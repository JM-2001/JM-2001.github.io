'use strict';
(function () {
    // Global variables
    let gitHubUsername = 'jm-2001';
    const GITHUB_API_BASEURL = 'https://api.github.com/users/';
    const GITHUB_API_BASEURL2 = 'https://api.github.com/repos/';

    /**
     * This function id() has a parameter which is used to find an element by an id
     * @param {*} idName 
     * @returns the element found
     */
    function id(idName) {
        return document.getElementById(idName);
    }

    /**
     * This function checkStatus() has a parameter which checks if the response is not ok
     * @param {*} response 
     * @returns a json file
     */
    function checkStatus(response) {
        if (!response.ok) {
            throw Error('Error in request: ' + response.statusText);
        }
        return response.json();
    }

    // Add an eventlistener
    window.addEventListener('load', init);

    /**
     * This function init() to add an eventlistener
     */
    function init() {
        const searchForm = document.querySelector('.search-bar');
        searchForm.addEventListener('submit', handleFormSubmission)
    }

    /**
     * This function handleFormSubmission() is used to obtain the value from the search box which is
     * to set the gitHubUsername variable
     * @param {*} event 
     */
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevents the default response from an input

        // Declare variables and initialize them
        const searchInput = document.getElementById('searchTextBar');
        const searchInputValue = searchInput.value.trim();

        // Declare If-Else statement to determine if the searchInputValue is empty or not
        if (searchInputValue) {
            gitHubUsername = searchInputValue;
            getUserRepos();
        } else {
            gitHubUsername = 'JM-2001'
            getUserRepos();
            console.error('Input value is empty');
        }
    }

    /**
     * This function getUserRepos() is used to fetch repo data and append it to the html
     */
    function getUserRepos() {
        // Declare github url
        let url = GITHUB_API_BASEURL + gitHubUsername + '/repos?sort=created'

        fetch(url)
            .then(checkStatus)
            .then((repoData) => {
                console.log(repoData);

                // Declare variable and initalize it with the github-container 
                let githubDiv = id('github-container');

                // Declare for loop to loop through the repoData
                for (const item of repoData) {

                    /**
                     * Declare variables of the html elements and their respected attributes 
                     */
                    let githubItemDiv = document.createElement('div');
                    githubItemDiv.classList.add('github-item');

                    let itemHeaderDiv = document.createElement('div');
                    itemHeaderDiv.classList.add('item-header');

                    let itemHeaderImg = document.createElement('img');
                    itemHeaderImg.classList.add('github-icon');
                    itemHeaderImg.src = "../Images/github.svg";
                    itemHeaderImg.alt = "Github Icon";

                    let itemHeaderSection = document.createElement('section');
                    itemHeaderSection.classList.add('item-header-section');

                    let itemHeaderSectionH = document.createElement('h1');
                    let itemHeaderSectionHA = document.createElement('a');
                    itemHeaderSectionHA.href = item['html_url']; // Add the repo url
                    itemHeaderSectionHA.textContent = item['name']; // Add the repo name

                    let itemHeaderSInnerDiv = document.createElement('div')
                    itemHeaderSInnerDiv.classList.add('item-header-div')

                    let itemHeaderSInnerDiv1 = document.createElement('div');
                    let itemHeaderSInnerDivImg1 = document.createElement('img')
                    let itemHeaderSInnerDivP1 = document.createElement('p')
                    itemHeaderSInnerDivImg1.src = "../Images/star-solid.svg";
                    itemHeaderSInnerDivImg1.alt = "Github favorites";
                    itemHeaderSInnerDivP1.textContent = item['stargazers_count']; // Add repo stargazers count

                    let itemHeaderSInnerDiv2 = document.createElement('div');
                    let itemHeaderSInnerDivImg2 = document.createElement('img')
                    let itemHeaderSInnerDivP2 = document.createElement('p')
                    itemHeaderSInnerDivImg2.src = "../Images/code-branch-solid.svg";
                    itemHeaderSInnerDivImg2.alt = "Github Fork";
                    itemHeaderSInnerDivP2.textContent = item['forks_count']; // Add repo fork count

                    let itemDesc = document.createElement('div')
                    itemDesc.classList.add('item-desc')

                    let itemDescP = document.createElement('p')
                    itemDescP.textContent = item['description'] // Add repo description

                    let itemStats = document.createElement('div')
                    itemStats.classList.add('item-stats')

                    let itemStatsUl = document.createElement('ul')
                    itemStatsUl.classList.add('item-stats-ul')

                    let itemS_CreateLi = document.createElement('li')
                    itemS_CreateLi.classList.add('stat-creation')
                    let itemS_CreateLiStrong = document.createElement('strong')
                    itemS_CreateLi.textContent = 'Creation Date: '

                    // Declare variable and initalize it by calling function formattingDate()
                    let itemS_CreateDate = formattingDate(item['created_at'])

                    itemS_CreateLiStrong.textContent = itemS_CreateDate

                    let itemS_UpdateLi = document.createElement('li')
                    itemS_UpdateLi.classList.add('stat-update')
                    let itemS_UpdateLiStrong = document.createElement('strong')
                    itemS_UpdateLi.textContent = 'Update Date: '

                    // Declare variable and initalize it by calling function formattingDate()
                    let itemS_UpdateDate = formattingDate(item['updated_at'])

                    itemS_UpdateLiStrong.textContent = itemS_UpdateDate

                    let itemS_CommitsLi = document.createElement('li')
                    itemS_CommitsLi.classList.add('stat-commits')
                    let itemS_CommitsLiStrong = document.createElement('strong')
                    itemS_CommitsLi.textContent = 'Commits: '

                    /**
                     * Declare variable and initalize it 
                     */
                    let commitUrl = GITHUB_API_BASEURL2 + gitHubUsername + '/' + item['name'] + '/stats/contributors';

                    /**
                     * This calls the function getRepoCommits() with the parameter to get the response. If nothing is 
                     * returned, it returns an error
                     */
                    getRepoCommits(commitUrl)
                        .then((commitNum) => {
                            itemS_CommitsLiStrong.textContent = commitNum;
                        })
                        .catch((error) => {
                            console.error('Error fetching commits:', error);
                        });

                    let itemS_WatchersLi = document.createElement('li')
                    itemS_WatchersLi.classList.add('stat-watchers')
                    let itemS_WatchersLiStrong = document.createElement('strong')
                    itemS_WatchersLi.textContent = 'Watchers: '
                    itemS_WatchersLiStrong.textContent = item['watchers_count']  // Add repo watcher count

                    let itemS_LangsLi = document.createElement('li')
                    itemS_LangsLi.classList.add('stat-languages')
                    let itemS_LangsLiStrong = document.createElement('strong')
                    itemS_LangsLi.textContent = 'Languages: '

                    /**
                     * This calls the function getRepoLanguages() with the parameter to get the response. If nothing is 
                     * returned, it returns an error
                     */
                    getRepoLanguages(item['languages_url'])
                        .then((languagesStr) => {
                            itemS_LangsLiStrong.textContent = languagesStr;
                        })
                        .catch((error) => {
                            console.error('Error fetching languages:', error);
                        });

                    /**
                     * This appends the elements to the div so it can create the visual 
                     */
                    githubDiv.appendChild(githubItemDiv);
                    githubItemDiv.appendChild(itemHeaderDiv);
                    githubItemDiv.appendChild(itemDesc);
                    githubItemDiv.appendChild(itemStats);

                    itemHeaderDiv.appendChild(itemHeaderImg);
                    itemHeaderDiv.appendChild(itemHeaderSection)

                    itemHeaderSection.appendChild(itemHeaderSectionH)
                    itemHeaderSection.appendChild(itemHeaderSInnerDiv);

                    itemHeaderSectionH.appendChild(itemHeaderSectionHA)

                    itemHeaderSInnerDiv.appendChild(itemHeaderSInnerDiv1)
                    itemHeaderSInnerDiv1.appendChild(itemHeaderSInnerDivImg1)
                    itemHeaderSInnerDiv1.appendChild(itemHeaderSInnerDivP1)

                    itemHeaderSInnerDiv.appendChild(itemHeaderSInnerDiv2)
                    itemHeaderSInnerDiv2.appendChild(itemHeaderSInnerDivImg2)
                    itemHeaderSInnerDiv2.appendChild(itemHeaderSInnerDivP2)

                    itemDesc.appendChild(itemDescP)

                    itemStats.appendChild(itemStatsUl)

                    itemStatsUl.appendChild(itemS_CreateLi)
                    itemS_CreateLi.appendChild(itemS_CreateLiStrong)

                    itemStatsUl.appendChild(itemS_UpdateLi)
                    itemS_UpdateLi.appendChild(itemS_UpdateLiStrong)

                    itemStatsUl.appendChild(itemS_CommitsLi)
                    itemS_CommitsLi.appendChild(itemS_CommitsLiStrong)

                    itemStatsUl.appendChild(itemS_WatchersLi)
                    itemS_WatchersLi.appendChild(itemS_WatchersLiStrong)

                    itemStatsUl.appendChild(itemS_LangsLi)
                    itemS_LangsLi.appendChild(itemS_LangsLiStrong)
                }
            })

            .catch((error) => {
                console.error('Error: ', error);
            });
    }

    /**
     * This function formattingDate() has a parameter which formats the time
     * @param {*} itemDate 
     * @returns the formatted time
     */
    function formattingDate(itemDate) {
        let dateObj = new Date(itemDate)

        return dateObj.toDateString()
    }

    /**
     * This function repoCommitUrl() is used to fetch the repo commit data and return it
     * @param {*} repoCommitUrl 
     * @returns the total amount of commits 
     */
    function getRepoCommits(repoCommitUrl) {
        return fetch(repoCommitUrl)
            .then(checkStatus)
            .then((repoCommits) => {

                /**
                 * Declare If-Else statement to check if the repoCommit is an array. It'll count the number of
                 * commits that occur
                 */
                if (Array.isArray(repoCommits)) {
                    let totalCommits = repoCommits.reduce((acc, curr) => acc + curr.total, 0);
                    console.log('Total commits:', totalCommits);
                    return totalCommits;
                } else {
                    console.error('Error: repoCommits is not an array');
                    return 0; // Return a default value or handle the error case
                }
            })
            .catch((error) => {
                console.error('Error: ', error);
                return 0; // Return a default value or handle the error
            });
    }

    /**
     * This function getRepoLanguages() is used to fetch the repo languages and return it
     * @param {*} langUrl 
     * @returns 
     */
    function getRepoLanguages(langUrl) {
        //console.log("Fetching languages from:", langUrl);
        return fetch(langUrl)
            .then(checkStatus)
            .then((langsData) => {
                //console.log("Languages data:", langsData);
                let languages = Object.keys(langsData);
                let languagesStr = languages.join(', ');
                console.log("Languages string:", languagesStr);
                return languagesStr;
            })
            .catch((error) => {
                console.error('Error fetching languages:', error);
                return null;
            });
    }

})();



