# Exercise 11.1

## Linting, testing and building

### Linting

Searching for "python lint" on DuckDuckGo with Stealthy enabled returned a Visual Studio Code extension as the first result, which sounds pretty similar to what I'd personally prefer.

Apparently there are people who can withstand countless red and/or yellow underlines within their text editor, so perhaps a proper CI/CD requires an additional lint phase after the actual code has been written, but what do I know.

If you're into that sort of stuff, you'll probably want pylint.

### Testing

Python has a standard library module for unit testing (unittest), so I'd start there.

Selenium seems to be a pretty popular choice for more extensive automated tests, perhaps in conjunction with a library like pytest.

### Building

If you're using Travis CI, it expects a build script with which to run tests, right? So I guess you'd use pytest for that, as mentioned above.

Other than that, I have no idea. The point of using Jenkins is to automate the build process, no? Perhaps I'd just use GitHub Actions then, if it gives me a CI/CD with no build step configuration.

I may have just misunderstood the question, though, and what building means in this case is just the interpretation(?) phase, which is nonexistent in Python.

## Alternatives

Travis, Sephamore, Azure DevOps

## Self-hosted or cloud-based?

As the hypothetical team only includes six (6) people, it sounds ideal for an easily configurable pipeline such as GitHub Actions.

The other major factor to consider is the cost, and since the hypothetical application is largely undefined, that factor is impossible to measure, so let's fall back to the first factor.

#### Aside

Why does the build thing use a MM/DD/YYYY timestamp
