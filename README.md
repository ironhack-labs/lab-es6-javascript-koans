![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)
# ES6 JavaScript Koans

## Introduction

We already did an exercise using Koans methodology on the first module. Koans are an excellent way for practice some fundamentals of the programming language we are learning. In this case, we will continue practicing JavaScript, but using the **ES6** features we learned!

Just to a quick reminder, let's remember a bit about Koans!

![](https://i.imgur.com/9Ug9NBn.png)

### What are the Koans?

[Koans](https://en.wikipedia.org/wiki/K%C5%8Dan) (公案) originate from Zen Buddhism. They are paradoxical riddles or stories which are used to test students on their path to enlightenment. They are designed to provoke thought or doubt in the student's mind. We are here to learn to code, so... what are the Koans?

The Koans are a series of assertions you must solve to understand how a programming language works. These assertions are the first step to become a better developer. The Koans become increasingly more difficult as you continue, so don't feel discouraged as you move forward through them.

There are Koans for all the programming languages. We will be working with JavaScript Koans. The mechanism is the following:

- You get an assertion that is not passing a **test**.
- You need to change/add code to make the **test** pass.

We are going to test the code assertions through Jasmine. Here we have introduced two new concepts: Testing and [Jasmine](http://jasmine.github.io/). Let's see a brief introduction about both of them.

## Testing

When we are coding, we have to be sure that our code is working as we expect. More than that, when we update our existing code, we have to be 100% sure that the old one is still working. As our website becomes larger, it becomes more difficult to check that all our features are working as we expect. How can we automatize this process? The answer is with **testing**.


## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.


We need to execute our tests so open the file `SpecRunner.html` with your browser.

In the beginning, you will see all the tests in yellow because the tests we have to implement are commented. (except for one, that throws an error, no worries :wink:)

All the tests are located inside the `spec` folder. Open the `koans.js` file and uncomment the following line:

```javascript
it('`var` works as usual, it does not restricts scope', () => {
  if (true) {
    /*You should add your code in here*/
  }
  expect(varX).toBe(true);
});
```

When we uncomment the line and refresh the `SpecRunner.html` page, we will see something like that:

![image](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0a3269347ff9cf345534607ba27809d2.png)

**The primary goal is not to finish all the tests. We want you to understand why each test is failing and how does JavaScript ES6 work in specific scopes.**

To do that, the correct workflow is the one used on Test Driven Development([TDD](https://en.wikipedia.org/wiki/Test-driven_development)):

- Uncomment the test
- Refresh the page to see that the uncommented test is failing
- Change the code to pass the test
- Refresh the page to see that the test is passing

:::warning 
Leave the expect lines unchanged! 👀 
:::

This process has to be done for each test. **Do not uncomment all the tests and launch the app. It will be more difficult for you to see if your code is passing the tests.**

Since the Koans includes tests about a lot of the ES6 features, you can keep practicing individually after class. 

As we said, this is an excellent way to learn things about a programming language. 

Happy coding! :heart:
