![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)


# JS | Koans Lab ES6

## Introduction

We already did an exercise using Koans methodology on the first module. Koans are an excellent way for practice some fundamentals of the programming language we are learning. In this case, we will continue practicing Javascript, but using the **ES6** features we learned!


## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Then clone this repo.


## Submission

- Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
- Create Pull Request so your TAs can check up your work.


### What are the Koans?

![](https://i.imgur.com/9Ug9NBn.png)

[Koans](https://en.wikipedia.org/wiki/K%C5%8Dan) (公案) originate from Zen Buddhism. They are paradoxical riddles or stories which are used to test students on their path to enlightenment. They are designed to provoke thought or doubt in the student's mind. We are here to learn to code, so... what are the Koans?

The Koans are a series of assertions you must solve to understand how a programming language works. These assertions are the first step to become a better developer. The Koans become increasingly more difficult as you continue, so don't feel discouraged as you move forward through them.

There are Koans for all the programming languages. We will be working with JavaScript Koans. The mechanism is the following:

- You get an assertion that is not passing a **test**.
- You need to change/add code to make the **test** pass.

We are going to test the code assertions through Jasmine. Here we have introduced two new concepts: Testing and [Jasmine](http://jasmine.github.io/). Let's see a brief introduction about both of them.

## Testing

When we are coding, we have to be sure that our code is working as we expect. More than that, when we update our existing code, we have to be 100% sure that the old one is still working. As our website becomes larger, it becomes more difficult to check that all our features are working as we expect. How can we automatize this process? The answer is with **testing**.


## Instructions


Open the file `SpecRunner.html` with your browser.

In the beginning, you will see all the tests in yellow because the tests we have to implement are commented.

![image](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_f65f72c3d74cc10a06d8589219bb6f69.png)

All the tests are located inside the `spec` folder. Open the `koans.js` file and uncomment the following line:

```javascript
it('`var` works as usual, it does not restricts scope', () => {
  if (true) {
    /*You should add your code in here*/
  }
  expect(varX).toBe(true);
});
```

When we uncomment the line and refresh the `SpecRunner.html` page, we will see something like this:

![image](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0a3269347ff9cf345534607ba27809d2.png)

**The primary goal is not to finish all the tests. We want you to understand why each test is failing and how does JavaScript ES6 work in specific scopes.**

To do that, the correct workflow is the one used on Test Driven Development([TDD](https://en.wikipedia.org/wiki/Test-driven_development)):

- Uncomment the test
- Refresh the page to see that the uncommented test is failing
- Change the code to pass the test
- Refresh the page to see that the test is passing

::: warning
Leave the `expect` lines unchanged! :eyes:
:::

This process has to be done for each test. **Do not uncomment all the tests and launch the app. It will be more difficult for you to see if your code is passing the tests.**

## Pair Programing

Since the Koans includes tests about a lot of the ES6 features, you will use the same exercise for Pair Programming and Daily Exercise.

The first 45 tests corresponds to the Pair Programming, and the rest are for the Daily Exercise. Inside the `koans.js` you will find a flag to indicate where the Daily Exercise begins:

```javascript
/*********************************
********* DAILY EXERCISE *********
**********************************/
```

Do not worry if you don't reach the flag during the Pair Programming, you can continue later! :wink:

As we said, this is an excellent way to learn things about a programming language. Good luck to all of you :)

Happy Coding! :heart:
