# Contributing guidelines

Above all, follow the [development section](../README.md) in the readme file.

## Linters

Make sure all your code passes linter tests. Project is configured to run the linter anytime you attempt to commit a change.
But if you want to run this task by yourself and see the lint errors on terminal, run `yarn run lint`.

Linter configuration of this project extends airbnb and prettier configurations.
See `.eslintrc` to learn more about the rules and exceptions.

Fix any errors reported by the linters. Leave warnings in at your own
discretion, but _do_ document them.

Document each and every instance where you disable a linter. _Disable linters
only for the relevant lines_.

## Commit messages

Your commit summary should be prefixed with a tag, depending on the type of contribution.

Use **only** the following tags in your commit messages (in brackets please, _no
colon after the tag_):

* **redux:** for Redux actions and reducers. Includes new ones, fixes or improvement
* **docs:** for only documentation changes without any code changes
* **page:** for changes to page components or new pages
* **comp:** for changes to smaller components or new components, mainly presentational components.
* **style:** for CSS stylesheets changes or new ones
* **asset:** for asset changes (only in `src/assets` or favicon)
* **app:** for more general app maintenance changes, e.g. renaming/moving
  files, refactoring components.
* **test:** for testing changes only
* **tool:** for changes related to build/dev tools, e.g. gulp, webpack, etc.
* **chore:** for general repository changes and/or cleanup (e.g. gitignore)
* **fix:** for other fixes that don't fall in one of the above categories
* **text:** for text changes only, typo fixing included

If a commit would cover two of the above cases (for example, a new page that
also uses a new component), split them into separate, focused commits instead.

**Do not** create commits just to fix conflicts from another branch. Instead,
rebase and fix conflicts during the rebase process.

## Pull Requests

Send your pull requests to the `develop` branch.

Make sure that your branch is free of conflicts.

If your branch is out of date, prefer to use rebasing instead of merging from
master. This keeps history clean and linear.
