# Object Oreiented Programming Concepts In Typescript.

In software design over many years, commonly occurring problems were identified. Re-usable solutions to these problems are called Design Patterns. Before diving into design patterns, we need to revisit a few basic principles of software development. Let’s start with SOLID.

## SOLID Principles

1. Single Responsibility Principle.
2. Open/Closed Principle.
3. The Liskov Substitution Principle.
4. Interface Segregation Principle.
5. Dependency Inversion Principle.

### Single Responsibility Principle.
This principle states that every method/class should handle a single responsibility. This is important because it results in better readability of code and separation of concerns.

### Open/Closed Principle
The core meaning of the Open/Closed principle is made clear by the statement:
- *open to extension, closed for modification.
- *The idea is that a class, once implemented, should be closed for any further modification. 
If any more functionality is needed, it can be added later using extension features such as inheritance. This is primarily done so as to not break existing code as well as unit tests. It also results in a modular code.

### Liskov Substitution Principle
Imagine you have a class S which has subtypes S1, S2, S3. In object-oriented terms, assume a class Animal which is extended by subclasses like Dog , Cat etc. The Liksov Substitution Principle states that any object of type S (Animal in our case) can be substituted with any of its subclasses (S1, S2, S3). Since this type of substitution was first introduced by Barbara Liskov, it's known as the Liskov Substitution Principle.

Now if our Animal class has a walk method, it should work fine on instances of Dog and Cat both.

### Interface Segregation Principle

The Interface Segregation Principle — or ISP for short — states that instead of a generalized interface for a class, it is better to use separate segregated interfaces with smaller functionalities. This is similar to ideas we’ve discussed so far around maintaining loose coupling, but for interfaces.

> The interface segregation principle states that no client should be forced to depend on methods it does not use. By putting too many properties in our interfaces, we risk breaking the above rule.

### Dependency Inversion Principle

The Dependency Inversion Principle states that high-level modules should not depend on low-level modules, but rather on abstractions. Secondly, abstraction should not depend on details. When you think about it, this sounds like common sense. Practically, though, we might miss these details when we work on our software architecture.

> Dependency Inversion prefers using composition instead of inheritance.

## Class Member Visibility

** Public vs Private vs Protected **

> The default visibility of class members is public. A public member can be accessed anywhere.

```
class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();

```

> protected members are only visible to subclasses of the class they’re declared in.

```
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName();

```

> private is like protected, but doesn’t allow access to the member even from subclasses:

```
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);

class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x);
Property 'x' is private and only accessible within class 'Base'.
  }
}

```

> Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.

```
class Greeter {
  readonly name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
 
  err() {
    this.name = "not ok";
    Cannot assign to 'name' because it is a read-only property.
  }
}
const g = new Greeter();
g.name = "also not ok";
Cannot assign to 'name' because it is a read-only property.

```

## Abstract Classes and Members

> An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.

The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be concrete.

```

abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
const b = new Base();
Cannot create an instance of an abstract class.

```

> We can’t instantiate Base with new because it’s abstract. Instead, we need to make a derived class and implement the abstract members:

```

class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();

```



More reads on [typescript classes](https://www.typescriptlang.org/docs/handbook/2/classes.html) [^note].