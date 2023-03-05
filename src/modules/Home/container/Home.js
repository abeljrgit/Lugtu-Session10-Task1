import React, { Component } from 'react';
import { DummyData } from '../../../assets';

class Home extends Component {
  render() {
    // #2
    for (let property in DummyData.employeeData) {
      console.log(property);
    }

    // #3-a
    const arrObj = [
      {
        firstName: 'alina',
        id: 1,
        age: 14,
      },
      {
        firstName: 'harry',
        id: 2,
        age: 15,
      },
      {
        firstName: 'alex',
        id: 3,
        age: 25,
      },
    ];
    const arrObj2 = [
      {
        firstName: 'abel',
        id: 1,
        age: 14,
      },
      {
        firstName: 'abel',
        id: 2,
        age: 15,
      },
      {
        firstName: 'abel',
        id: 3,
        age: 16,
      },
    ];
    const checkFirstNamesArrObj =
      new Set(arrObj.map((data) => data.firstName)).size === 1;
    const checkFirstNamesArrObj2 =
      new Set(arrObj2.map((data) => data.firstName)).size === 1;
    console.log(checkFirstNamesArrObj, checkFirstNamesArrObj2);

    // #3-b
    console.log(arrObj.find((element) => element.age > 20));
    // #3-c
    console.log(arrObj.find((element) => element.age < 20));
    // #3-d
    console.log(arrObj.filter((element) => element.id === 2));
    // #3-e
    console.log(
      [9.8, 9.7, 4.5, 3.4].reduce(
        (prevValue, currValue) => Math.round(prevValue) + Math.round(currValue)
      )
    );

    // #3-f
    const arrObj3 = [
      {
        firstName: 'joe',
        age: 24,
      },
      {
        firstName: 'alina',
        age: 12,
      },
      {
        firstName: 'alex',
        age: 20,
      },
    ];
    console.log(arrObj3.filter((e) => e.age >= 18));

    // #3-g
    console.log(
      [90, 89, 56, 45].reduce((prevValue, currValue) => prevValue + currValue)
    );

    // #3-h
    // true == even, false == odd
    console.log([90, 89, 56, 45].map((e) => e % 2 === 0));

    // #3-i
    const arrObj4 = [
      {
        salary: 56000,
      },
      {
        salary: 90000,
      },
    ];
    console.log(
      arrObj4.reduce(
        (prevValue, currValue) => prevValue.salary + currValue.salary
      )
    );

    // #3-j
    console.log(
      ['red', 'pink', 'orange', 'red'].reduce(
        (prevValue, currValue) => prevValue + currValue
      )
    );
    return <div>Hello World</div>;
  }
}

export default Home;
