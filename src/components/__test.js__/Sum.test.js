import { Sum } from "../Sum";

test("sum function should be calculate sum of two number",()=>{
    const result=Sum(3,4)

    //Assertion

    expect(result).toBe(7);
}

)