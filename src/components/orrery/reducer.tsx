export function reducer(
  state: number,
  action: { type: "increment" | "decrement" }
) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
  }
}
