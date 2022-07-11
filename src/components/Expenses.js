import ExpenseItem from './ExpenseItem';

function Expenses(expenses){

    return (
      <div>
        <ExpenseItem
          title={expenses.data[0].title}
          amount={expenses.data[0].amount}
          date={expenses.data[0].date}
        />
        <ExpenseItem
          title={expenses.data[1].title}
          amount={expenses.data[1].amount}
          date={expenses.data[1].date}
        />
        <ExpenseItem
          title={expenses.data[2].title}
          amount={expenses.data[2].amount}
          date={expenses.data[2].date}
        />
        <ExpenseItem
          title={expenses.data[3].title}
          amount={expenses.data[3].amount}
          date={expenses.data[3].date}
        />
      </div>
    );
}

export default Expenses;