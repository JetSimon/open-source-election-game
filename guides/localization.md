# List of Localizable Strings

This is a list of all strings you can use as keys for engine.setLocalization/engine.getLocalization and they will actually do something.

If you want to add another key, look at how those functions are used in OSEG currently and make a PR. Or make an issue requesting the key you think is missing.

- Name
- Party
- State
- Issue Stances
- Counters
- Choose your Candidate
- Candidate
- Choose your Running Mate
- Running Mate
- Shuffle Questions?
- Next
- Slides
- Map
- Overall Results Detailed
- Results By State
- Select a state
- Closest States
- Election Results and Data by State
- View states by
- Latest Polls/Electoral Map
- Popular Vote %
- Popular Votes
- Electoral Votes
- EVs
- Hover over a state see polling
- Switch to Overall PV/EV Estimate
- Switch to State Estimate
- Are you sure you want to visit
- Feedback
- Okay

## Example

The following example would replace "Choose your Candidate" in the candidate selection screen with "Choose your Guy".

It also uses the optional onCandidateSelectionStarted function, which would have to exported at the bottom along with the default three.

```js
function onCandidateSelectionStarted(engine) {
  engine.setLocalization("Choose your Candidate", "Choose your Guy");
}
```
