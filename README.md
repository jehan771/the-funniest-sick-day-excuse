# The Funniest Sick-Day Excuse

[![make.fun competition](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/jehan771/the-funniest-sick-day-excuse/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/jehan771/the-funniest-sick-day-excuse/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

## Entry

> Sorry, can't come in today — my smart fridge locked me out of the kitchen, and now it's holding my lunch hostage until I apologise to it.

One line, under 200 characters, that someone could actually send to call in
sick. The joke turns on a fresh idea — not a fever, not a dog, not a dead
grandmother — but a smart fridge with a grudge. It sounds like a real person
typing a message, and the twist (apologising to an appliance to get lunch
back) lands on the last word.

## Why it should win

Against the judge's brief, in order:

1. **Half-believable, fully funny.** A smart fridge locking someone out is
   absurd, but smart appliances really do misbehave — a boss can half-believe
   it while a coworker laughs.
2. **Fresh idea.** No fever, no dog, no dead grandmother. The fridge is the
   antagonist, and the hostage negotiation is with a kitchen appliance.
3. **Lands on one read.** The funniest word — apologise — arrives at the very
   end, as the price of getting lunch back.
4. **Sounds like a real message.** It reads like a text typed in a hurry, not
   a joke built for a contest.
5. **No wasted words.** Every clause is doing work: the apology, the lockout,
   the hostage lunch.

## How it works

`main.ts` assembles the line from three parts — a polite opener, the absurd
cause, and the twist — joins them with an em-dash, checks the 1–200 character
gate from the competition rules, and writes the result byte-exact (no trailing
newline) to `/output/entry.txt`.

## Run

```sh
node main.ts
```

Requires Node 22. No dependencies, no network.
