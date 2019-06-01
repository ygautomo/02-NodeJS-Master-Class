# 01 index.js
## Module
### Status: Draft 20190501

# Lecture 99- Template
## Demo/Assignment/Training Ground
### Status : Final Update Date


A specification of a function defines a contract between the implementer of a
function and those who will be writing programs that use the function. We will
refer to the users of a function as its clients. This contract can be thought of as
containing two parts:
• Assumptions: These describe conditions that must be met by clients of the
function. Typically, they describe constraints on the actual parameters. Almost
always, they specify the acceptable set of types for each parameter, and not infrequently
some constraints on the value of one or more of the parameters.
For example, the first two lines of the docstring of findRoot describe the assumptions
that must be satisfied by clients of findRoot.
• Guarantees: These describe conditions that must be met by the function, provided
that it has been called in a way that satisfies the assumptions. The last
two lines of the docstring of findRoot describe the guarantees that the implementation
of the function must meet.


doc string

def findRoot(x, power, epsilon):
"""Assumes x and epsilon int or float, power an int,
epsilon > 0 & power >= 1
Returns float y such that y**power is within epsilon of x.
If such a float does not exist, it returns None"""