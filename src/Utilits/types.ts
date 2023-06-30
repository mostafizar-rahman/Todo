export type TodoType = {
  id: String;
  title: String;
  drescriotion: String;
  fullStartDate: {};
  tags: String[];
};

export type InitialStateType = {
  id: String;
  title: String;
  tagInput: String;
  tags: String[];
  drescriotion: String;
  startDate: String;
  startMonth: String;
  startYear: String;
  endDate: String;
  endMonth: String;
  endYear: String;
  error: String;
  todoTitems:String[]
};
