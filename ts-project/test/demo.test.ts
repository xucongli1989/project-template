import { getNowYear } from "../src/demo/index"

test("demo", () => {
    expect(getNowYear()).toBe(new Date().getFullYear())
})