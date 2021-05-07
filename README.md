# Reproduction steps

1. Run `npm i`
2. Run `ng serve`
3. Open browser and visit localhost:4200
4. Click list button
5. Edit one of the input fields
6. Click empty button
7. Repeat step 4 to 6 couple times 
8. Open inspect memory tab
9. Click bin to collect garbage
10. Take a heap snapshot
11. Search for ListComponent

## Current behavior

Instances of ListComponent in the memory.

## Expected behavior

No instance of ListComponent to exist in memory.

This only happens when the input field is modified

## Enviroment

Angular version: 11.2.13

Browser:
- [x] Chrome (desktop) version 90.0.4430.93 (Official Build) (x86_64)
- [ ] Chrome (Android) version XX
- [ ] Chrome (iOS) version XX
- [ ] Firefox version XX
- [ ] Safari (desktop) version XX
- [ ] Safari (iOS) version XX
- [ ] IE version XX
- [ ] Edge version XX

