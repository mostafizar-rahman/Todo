export type TodoType = {
  id: String;
  title: String;
  drescriotion: String;
  fullStartDate: {};
  fullEndDate: {};
  tags: String[];
  status: string
};

export type InitialStateType = {
  id: String;
  title: String;
  tagInput: any;
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
