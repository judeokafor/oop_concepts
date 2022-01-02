# Object Oreiented Programming Concepts.

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

### Dependency Inversion Principle

The Dependency Inversion Principle states that high-level modules should not depend on low-level modules, but rather on abstractions. Secondly, abstraction should not depend on details. When you think about it, this sounds like common sense. Practically, though, we might miss these details when we work on our software architecture.


