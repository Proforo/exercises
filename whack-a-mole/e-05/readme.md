# E-05: JSON

1. Copy the entire Array value assigned to the variable `leaders` (in `script.js`) to the new empty file `data/leaders.json`
   - Be sure to include the `[` and `]` that enclose the Array data, but not the `let leaders =` part before it
   - The file `leaders.json` should now only contain the Array data (several Objects) enclosed within a single Array: `[ ... ]`
2. Format the new Array in `leader.json` to be valid JSON:
   1. Replace all single-quote or backtick symbols used to wrapped around the `name` string data, with double-quote symbols
   2. Wrap all propery names (`name`, `secs`, `miss`, and `score`) with double quotes around them
3. To verify your JSON is valid, copy the entire Array from `leaders.json` and paste the code into the text input at <https://jsonlint.com/>, then click the button "Validate JSON" to confirm
   - A valid formatted Array will show the message "Valid JSON" in a green bar in the "Results" section (below the input)
   - An invalid formatted Array will show the errors within a red bar in the "Results" section
      - If errors exist, make corrections and click "Validate JSON" again until "Valid"