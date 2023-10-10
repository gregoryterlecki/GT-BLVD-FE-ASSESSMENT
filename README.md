# Intro

Hi 👋 and welcome to the Boulevard frontend engineer take-home assessment!

We’re so glad you decided to engage in our recruiting process and designed this assessment to be fun, flexible, and let you strut your stuff.

This assessment is purposefully open-ended. We want to see your style – everything from setting up your favorite tools to how you document your code.

We recommend seeing how far you can get in 4 hours.

So… let’s jump in!

## The project

You’re going to build an _email verification_ web app that mimics the type of stuff we build at Boulevard!

### Here are the requirements:

- Use this repository as a starting point - it is based off of [Create React App](https://github.com/mui/material-ui/tree/master/examples/material-ui-vite-ts)
- Create a form that lets a user enter an email address
- Consume the [DISIFY email verification API](https://www.disify.com/) to find out whether the email address is valid or disposable and expose that information to the user
- Track the history of validation requests that have been made by the user and show that on the page

### Here’s how we will evaluate:

- The application is feature complete and bug free - we value attention to detail and care about the quality of our work.
- You added linting and style controls - we care about consistent styles and engineered controls to enforce them.
- You added tests - we care about the quality of our code and put controls in place to ensure quality now and in the future.
- You used external libraries where appropriate - we don’t want to reinvent the wheel and would rather spend our time investing in what truly adds value to our customers. Consider component libraries, network libraries, state libraries, etc.
- You used clean code principles and component composition - we prioritize clean code to enhance readability, maintainability, and scalability.
- You used TypeScript to help achieve clean code - we use Typescript to enhance readability, maintainability, and code safety.
- You added accessibility controls - our mission is to make self care accessible to ALL. This includes things like supporting screen readers and keyboard form navigation
- You commit your work in small, atomic commits - we practice continuous integration and deployment through small, incrementally deliverable units of work 

### Running the app

You will need to use NodeJS version 16.14.2 or greater.
[https://nodejs.org/dist/v16.14.2/](https://nodejs.org/dist/v16.14.2/)

*Install*
```
> npm install
```

*Running the app*
```
> npm start
```


## Submission

Create a public git repository for your submission and send the link to [cmullins@blvd.co](cmullins@blvd.co)

## Questions?

Please reach out to [cmullins@blvd.co](cmullins@blvd.co) and we’ll get back to you ASAP.

Thanks, and we’re so excited to see what you come up with 🎉.

# GREG's NOTES

Thanks for taking the time to review my submission for the take home assessment.

While the app works, there is a lot more I aimed to get done with this project.
The requirements were quite simple, and for all of them I knew exactly how I would get it done and which tools I would use.

However, there were things I got stuck with that took a lot of time. On top of that, I had nobody to ask in case I got stuck with something.
For that reason, I don't feel this submission is a true reflection of my work in the real world.

In either case, here's a breakdown of what I was able to accomplish, what I struggled with, and why:

## What I got done

- The application is feature complete and bug free.
- I was able to ensure the application's accessibility by doing the following:
  - Test the ui for keyboard-only navigation. Data can be entered and submitted without a mouse.
  - I changed the default document title to something relevant to the page, making the app work much better with screen readers.
  - I made sure to use semantic HTML.
- I was able to write tests for each component (not as many as I'd like).
- I was able to split my work into many smaller PRs.
- Add i18n integration to avoid using hard coded text in the markup.
- Error handling in case of a failure of the email validation service.

## What I didn't get done

- integrate style and formatting controls
- refactoring code
- clean up the FE layout; in this project, the UI is quite bare
- responsive design
- formatting the default `Date().toString()` to something more readable

## My Process / Why I didn't get everything done that I wanted to

For most of these, I simply didn't have enough time. 

Setting up tests for components was surprisingly difficult, although simple in concept. While I worked with all kinds of automated testing before, setting it up for the first time is simply something I (or any developer for that matter) don't do nearly as often as writing new tests.
Getting this set up is one thing that held me up for a bit of time.

As for enforcing code formatting controls, I wanted to use husky to make it easier to write a pre-commit hook. After following their set up guide, I found my pre-commit hooks were simply not running, despite having followed a lot of the troubleshooting advice from husky's docs.
I spent a lot of time trying to get this working, since I _really_ wanted to get a pre commit hook working that would run prettier and eslint.

During this process I even tried ditching husky in case using a default pre-commit hook might be easier.
However I ran into a (small) roadblock with this as well. While I was able to get the hook to run tests for example, by default the test runner doesn't simply output the results of the test. It runs in watch mode. I couldn't just disable watch mode altogether though. I tried adding ` --watchAll=false` to the test script in `package.json`, but I was having trouble with that as well.

Anyways, point is, this stuff isn't supposed to be hard and I knew right away this is what I would do for formatting enforcement, since I've worked with this in the past.

I also would have liked to extract a lot of the logic and state in `App.tsx`, but I realized that maybe I don't need to.
Firstly, the component itself is still well under 100 lines long, and it felt like overkill to bring in a provider, or a state management tool for this.
Additionally, although I absolutely believe in avoiding prop-drilled code, in this case state was only being passed 1 level down, so I didn't deem these solutions necessary.

I also wanted to make my last PR smaller, but didn't have enough time to break this apart.
All the component tests should pass from this branch, although I wasn't able to verify the tests in the EntryTable and EntryForm branches.

## Summary

This was very fun to do. Thanks for giving me the opportunity.
This code is definitely not what I'd submit in the real world, but I hope that the details I've written above can better attest to my attention to detail as an engineer overall.

Thank you so much, and I can't wait to hear back.
