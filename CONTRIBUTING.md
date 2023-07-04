# Contributing to DevsInTech

Welcome to **_DevsInTech_**✨, and thank you for your interest in contributing! After reading this documentation you'll be able to contribute efficiently to our project. **Tip:** Use the Table of Contents to navigate through the document quickly.

## Table Of Contents

- [Resources for new contributors](#resources-for-new-contributors)
- [How to get started](#how-to-get-started)
  - [Using the Command Line](#using-the-command-line)
  - [Using GitHub Desktop](#using-github-desktop)
- [How to set up your Development Environment](#how-to-set-up-your-development-environment)
- [How to Contribute](#how-to-contribute)
  - [How to Raise an Issue](#how-to-raise-an-issue)
    - [How to report a bug](#how-to-report-a-bug)
    - [How to submit a Documentation Issue/Update](#how-to-submit-a-documentation-issueupdate)
    - [How to make a Feature Request](#how-to-make-a-feature-request)
    - [How to make a style change](#how-to-make-a-style-change)
  - [How to Solve an Issue](#how-to-solve-an-issue)
  - [How to Submit Pull Requests](#how-to-submit-pull-requests)
    - [Using Command Line for Pull Requests](#using-command-line-for-pull-requests)
    - [Using GitHub Desktop for Pull Requests](#using-github-desktop-for-pull-requests)
- [Code of Conduct](#code-of-conduct)
- [Community Guidelines](#community-guidelines)
- [Licensing](#licensing)

## Resources for new contributors

Are you new to open source? or to open source contributions in general? Well, you came to the right place: here are some resources to help you get started contributing to open source.

- [Learn Git and GitHub from scratch](https://youtu.be/apGV9Kg7ics) - This tutorial explains Git and GitHub for version control and collaborative coding.
- [Complete Guide to Open Source - How to Contribute](https://youtu.be/yzeVMecydCE) - Learn about how to find projects to contribute to, how to make issues and PRs, and more.
- [Learn Git Branching](https://learngitbranching.js.org/) - This website provides an interactive platform for learning and practicing Git commands and branching strategies.
- [GitHub Training Kit](https://training.github.com/) - It contains cheatsheets and training manuals in multiple languages
- [Git and GitHub for Beginners - Crash Course](https://youtu.be/RGOj5yH7evk) - This tutorial explains users how to effectively utilize Git version control within the Visual Studio Code editor
- [GitHub Documentation](https://docs.github.com/en) - Contains essential guides for mastering GitHub's features

## How to get started

Before making any changes to this repository, please take your time to go through our project and become familiar with our vision for it. After that, discuss your proposed modifications to improve our project with the repository owners and mentors. Feel free to use issues, email, or any other convenient method of communication to initiate the discussion.

It's worth noting that we have a [Code of Conduct](https://github.com/TanmayAdithya/DevsInTech/blob/main/CODE_OF_CONDUCT.md) in place, and we kindly ask that you follow it when engaging with the project. We appreciate your cooperation and respectful interactions.

## What are the tools needed to contribute to this project

Before you start, you must install the necessary tools mentioned below onto your device.

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download/) [![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/downloads) [![pnpm](https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=)](https://pnpm.io/)

## How to set up your Development Environment

##### Using the **Command Line**

1. Fork the repo.
   ![Fork-Image](https://i.postimg.cc/GpGzgX9Z/Git-Hub-Docs.png)

2. Clone the Forked Repository to your local machine.

   ```bash
   git clone https://github.com/YOUR_USER_NAME/DevsInTech.git
   ```

3. Change the working directory.
   ```bash
   cd DevsInTech
   ```
4. Install all dependencies.
   ```bash
   pnpm i
   ```
5. Start the application.
   ```bash
   pnpm dev
   ```
6. Visit [http://localhost:3000](http://localhost:3000) to view the application

##### Using **GitHub Desktop**

1. Fork the repo.

   ![Fork-Image](https://i.postimg.cc/GpGzgX9Z/Git-Hub-Docs.png)

2. In the forked repository click **Open with GitHub Desktop** (make sure to download GitHub Desktop [here](https://desktop.github.com/))

   ![Open-with-GitHub-Desktop](https://i.postimg.cc/7L4212QN/Open-with-Git-Hub-Desktop.png)

3. Once **GitHub Desktop** opens up, make sure "**To contribute to the parent project**" option is selected and then click on **Continue**

   ![Contribute to upstream repo](https://i.postimg.cc/gJn3S63L/Contribute-to-upstream-repo.png)

4. Finally, open the project in your preferred code editor. (**Warning:** To contribute to the project, all code and documentation modifications should be committed to a separate branch rather than **main/master**.)

   ![open-code-editor](https://i.postimg.cc/TY31xXKf/Open-in-Code-editor.png)

## How To Contribute

Your contributions, whether code-related or not, are highly valued and appreciated. Every contribution, no matter how small, helps make the project better. Outlined below are several ways you can contribute to the project.

### What are Github Issues

---

GitHub issues are a way to track and manage tasks, bugs, and discussions in a project. You can find the issues tab within a GitHub repository, usually located in the navigation menu at the top of the repository page.

[![issues.png](https://i.postimg.cc/wvy92tvq/issues.png)](https://postimg.cc/zbNmXGK6)

### How to Raise an Issue

---

_Raising an issue_ involves creating a new entry in the repository's issue tracker to report problems, suggest improvements, or start discussions, facilitating collaboration and issue resolution. **Note:** Always look for existing issues that are similar to the one you want to raise. If you find any, please do not raise the same issue again; otherwise, you may continue to raise your issue.

You can raise an issue by visiting the issues page and clicking the green **New issue** button.

[![new-issue.png](https://i.postimg.cc/rmPDj0Lg/new-issue.png)](https://postimg.cc/R6wCV0hn)

By choosing the correct issue type, such as bug report, feature request, documentation update, or any other types of issues, you provide clarity and help streamline the issue management process for project maintainers and other contributors.

[![types-of-issues.png](https://i.postimg.cc/qR59708z/types-of-issues.png)](https://postimg.cc/k6Wjj0Ym)

### How to report a bug

---

When reporting bugs on GitHub, it is important to include the following information:

- Steps to reproduce the bug.
- Error messages encountered, if any.
- Screenshots or visual examples illustrating the issue.
- Any relevant code snippets or configuration settings.
- Details about the environment (operating system, browser, etc.).
- Any specific inputs or conditions that trigger the bug.
- Additional observations or context that may be helpful in understanding the problem.

This helps expedite the identification and resolution of the bug.

### How to submit a Documentation Issue/Update

---

When reporting a documentation issue or update, it is important to provide clear details and suggestions for improvement. Here are the key points to include:

- Clearly describe the problem or issue with the documentation.
- Identify the specific section or page of the documentation where the problem exists.
- Suggest specific improvements, corrections, or additions to address the issue.
- Provide examples or code snippets that can help illustrate the problem or proposed changes.
- Mention any confusion or misunderstandings caused by the current documentation.
- Offer any additional context or information that can assist in resolving the issue.

### How to make a Feature Request

---

When submitting a feature request, it is important to provide clear details and suggestions to help project maintainers and contributors understand and evaluate your request. Here are the key points to include:

- Clearly describe the feature you are requesting, including its purpose and the problem it aims to solve.
- Explain the potential benefits and impact of implementing the requested feature.
- Consider including any relevant examples, code snippets, or mock-ups to illustrate your request.
- Explain how the requested feature aligns with the goals and scope of the project.

### How to make a style change

---

When suggesting a style change on GitHub, it is important to provide clear details and explanations to help project maintainers and contributors understand the proposed change. Here are the key points to include as bullet points:

- Clearly describe the specific aspect of the project's style that you would like to change.
- Explain the rationale behind the suggested style change and why it would be beneficial.
- Provide specific examples or comparisons to illustrate the current style and the desired style.
- Offer any additional context or information that can assist in evaluating and implementing the style change.

**Note:** If the issue you wish to raise does not fit into one of these categories, create a blank issue.

### How to solve an Issue

---

If you'd like to solve an issue, you can browse our list of open issues in the repository or on our issue tracker. Using relevant labels, you can identify issues which you are capable of resolving. Some of these labels are listed below:

[`GSSoC23`](https://github.com/devs-in-tech/DevsInTech/labels/GSSoC23) - This label is assigned to those who want to work on an issue under GSSoC23

[`Level 1`](https://github.com/devs-in-tech/DevsInTech/labels/Level%201) - 10 Points (Docs/Minor bugs)

[`Level 2`](https://github.com/devs-in-tech/DevsInTech/labels/Level%202) - 25 Points (Enhancement of Exisiting feature)

[`Level 3`](https://github.com/devs-in-tech/DevsInTech/labels/Level%203) - 45 Points (Refactoring/adding functionalities)

[`question`](https://github.com/devs-in-tech/DevsInTech/labels/question) - Further information is requested

[`under review`](https://github.com/devs-in-tech/DevsInTech/labels/under%20review) - PR is under review by maintainers.

[`bug`](https://github.com/devs-in-tech/DevsInTech/labels/bug) - Something isn't working

[`documentation`](https://github.com/devs-in-tech/DevsInTech/labels/documentation) - Improvements or additions to documentation

[`duplicate`](https://github.com/thekavikumar/love-simple-ui/labels/duplicate) - This issue or pull request already exists

[`enhancement`](https://github.com/thekavikumar/love-simple-ui/labels/enhancement) - New feature or request

[`good first issue`](https://github.com/thekavikumar/love-simple-ui/labels/good%20first%20issue): Good for new contributors

[`help wanted`](https://github.com/thekavikumar/love-simple-ui/labels/help%20wanted) - Extra attention is needed

[`invalid`](https://github.com/thekavikumar/love-simple-ui/labels/invalid) - This doesn't seem right

[`wontfix`](https://github.com/thekavikumar/love-simple-ui/labels/wontfix) - This will not be worked on

If the issue is unassigned and you are interested in working on it, comment on the issue expressing your intention to contribute and ask to be assigned. Alternatively, if self-assignment is allowed, you can assign yourself to the issue. Discuss your approach with maintainers and contributors to align efforts and receive feedback.

## How to Submit Pull Requests

Before you create a pull request, please take a moment to review the guidelines outlined below. Following these guidelines will help ensure a smooth and efficient collaboration process.

### Format for Pull Requests

Make sure to commit following the Conventional Commits Standards. Your commit message should follow the pattern: `<type>[optional scope]: <description>`

`type` refers to :

- **feat**: A new feature
- **fix**: A bug fix
- **refactor**: Code refactoring
- **test**: Additions or modifications to test cases
- **docs**: README, or anything related to documentation
- **chore**: Regular code maintenance

`scope` (optional) refers to the section of the codebase you're working on _(eg. api, frontend, backend)_

`description` : A short summary providing additional contextual information about the code changes.

Read more about [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Using Command Line for Pull Requests

- If you have already forked the project, update your copy before working.

  ```bash
  git remote update
  git checkout <branch-name>
  git rebase upstream/<branch-name>

  ```

  ⚠️ **Warning:** Avoid commting changes in the Main Branch ⚠️

- Create a new branch for your changes:
  **Note:** Creating a new branch allows for isolated development and avoids merge conflicts while making PRs

  ```bash
  git checkout -b my-branch
  #Utilize the branch name to specify the type of issue you are addressing, whether it's a feature, bug fix, or enhancement.

  ```

- Commit and push your changes to your forked repository:
  **Note:** A PR should have only one commit. Multiple commits should be squashed. Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should be more descriptive.
- Make sure all of your commits are atomic (one feature per commit).

  ```bash
  git add .
  git commit -m "Add my changes"
  git push origin my-branch

  ```

- Go to your repository in browser and click on compare and pull requests. Then add a title and description to your pull request that explains your contribution.
  ![https://i.postimg.cc/1Xh6dxLJ/Final-PR.png](https://i.postimg.cc/1Xh6dxLJ/Final-PR.png)

### Using GitHub Desktop for Pull Requests

- Create a new branch for your changes:
  [![new-branch.png](https://i.postimg.cc/DypKNNW7/new-branch.png)](https://postimg.cc/4mcM7Bb0)
- Open your external code editor and connect to the repository. When you're through with your changes, commit and push them to your forked repository.:
  **Note:** Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should be more descriptive.
  ![https://i.postimg.cc/5y5PMs7J/Commit-Github-desktop.png](https://i.postimg.cc/5y5PMs7J/Commit-Github-desktop.png)
- Click on **Push origin** or press `Ctrl`+`P` or `⌘`+`P` to push your commits to the branch of your repository on Github. Learn more GitHub Desktop keyboard shortcuts [here](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/github-desktop-keyboard-shortcuts).
  ![https://i.postimg.cc/j5QdRGD8/push-origin.png](https://i.postimg.cc/j5QdRGD8/push-origin.png)
- Go to your repository in browser and click on compare and pull requests. Then add a title and description to your pull request that explains your contribution or press `Ctrl` + `R` or `⌘` + `R` on the keyboard in GitHub Desktop.
  ![https://i.postimg.cc/1Xh6dxLJ/Final-PR.png](https://i.postimg.cc/1Xh6dxLJ/Final-PR.png)

### Best Practices for Creating a Pull Request (PR):

- **Clear and Descriptive Title:** Provide a concise, descriptive title for your PR.
- **Detailed Description:** Include a thorough description of your changes.
- List specific changes made in a clear and concise manner. Mention any major code modifications, added functionality, or removed features.
- Create a checklist to help maintainers review the changes more effectively.
- Include screenshots or GIFs showcasing visual changes or new features.
- Mention any additional information or considerations that might be relevant.
- Be responsive to any feedback or change requests during the review process.

**Note:** [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop. Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

## Code of Conduct

By participating and contributing to this project, you agree to adhere to [this](https://github.com/devs-in-tech/DevsInTech/blob/main/CODE_OF_CONDUCT.md) Code of Conduct throughout your involvement. We appreciate your cooperation in fostering a positive and inclusive community for all.

## Community Guidelines

Join our [community chat on discord](https://discord.com/channels/1099745007172329592/1109164707241271368) to engage with other contributors and maintainers. Feel free to ask questions or seek clarification on any aspects of the project.

## Licensing

By contributing to this project, you agree that your contributions will be licensed under our [project's license](https://github.com/devs-in-tech/DevsInTech/blob/main/LICENSE).
