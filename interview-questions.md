# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is the syntax within React that allows us to alternate between JavaScript and HTML. It's a powerful tool that allows us to build UI much more easily in projects. One syntax difference between HTML and JSX is JSX allows us to seamlessly alternate between using HTML or JavaScript with appropriate syntax.

Researched answer: One difference with JSX and JavaScript is that we must always return one element within JSX components. That requires us to wrap our return statement in React fragments (<> </>) if we have more than one line of code we wish to return. Also, all tags in JSX are capable of self-closing, which is not true of HTML tags. 

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn was created by Facebook (now Meta) and allows us to quickly install dependencies into a node_modules directory within our repository. We use Yarn daily in pair programming to create our react apps and build our app (with the yarn start command), hosted locally, so that we can see any code changes in real-time, like a live server.

Researched answer: Yarn is a package manager that was built as an alternative to NPM. Yarn is quicker and more secure than NPM. 

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function is a function that has no name. Technically every arrow function we create is an anonymous function.

Researched answer: If an anonymous function is not assigned to a variable, it is not able to be accessed after its declaration.

4. What is the difference between a class and an object?

Your answer: A class is a reusable set of code, serving as a template for new objects to be made from. We can use the constructor method in a class to create a set of properties to be used with each new instance of that class. For example:
```javascript
class Person = {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

const Abraham = new Person("Abraham", "Lincoln", 213);
const George = new Person("George", "Washington", 287);
```

We can continue to make as many new instances of 'people' as we want using the Person class, allowing us to quickly create new objects and passing in whatever values we want for the properties defined with the constructor method.


Researched answer: An object is an instantiated version of a class that will hold the values for the properties of the class it's called upon. The 'new' keyword is how we can use a class and create a new object from that specified class. 


5. What is the difference between state and props in React?

Your answer: Props are how we pass data from the parent component to child components. We can use the state hook to continue to update a state variable between renders. For instance, we can create a state hook to track a button being clicked that will add 1 to that state on every click. In order for us to use the state hook, we must import it from React.

```javascript
import {useState} from 'react'

const [count, setCount] = useState(0)

const increaseCount = () => {
    setCount(count + 1)
}

return (
    <>
    <p> You've clicked {count} times</p>
    <button onClick={increaseCount}>Click me</button>
    </>
)

```

The state hook will let us to see changes happen in real-time on our page. Our page is now dynamic and can "react".

Researched answer: State is a local state of a component and is how data/values can be tracked, stored, or updated on every render. Due to React's nature of passing data downwards, we must use props to move data or event handlers from a parent to a child component.

6. STRETCH: Which is the difference between a div and a span?

Your answer: I don't actually know what span tags are used for. The div tag is used for separating sections on a page.

Researched answer: Span tags are inline elements, most typically wrapped on specific words on a page. If you wanted to change a word's color within a <p> element, you could wrap that word with a span tag and give it a style to change its color.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Program centered around containing/isolating data inside of objects. This allows for data to be manipulated without affecting the whole program.

2. Ruby: Open-source, object-oriented scripting language similar to Python. It was created by Yukihiro Matsumoto in the 90's. It features syntax that is designed to be easy to understand and write.

3. Implicit return: Able to output the last line of code without having to use the return keyword.

4. Ruby blocks: Anonymous functions, created with the do/end keywords or {}, that can be passed into methods.

5. Ruby hashes: A collection of key-value pairs, similar to an array.
