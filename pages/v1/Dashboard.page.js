class Dashboard {
  constructor() {
    this.recentTransactions = [];
  }

  get recentTransactionsTable() {
    return $("#transactionsTable");
  }

  get recentTransactionsTableRow() {
    return $$("#transactionsTable tbody tr");
  }

  get amountsTableHeader() {
    return $("#amount");
  }

  get compareExpensesButton() {
    return $("#showExpensesChart");
  }

  get adOne() {
    return $("#flashSale img");
  }

  get adTwo() {
    return $("#flashSale2 img");
  }

  /**
   * Retrieves the transactions in the recent transactions table
   */
  get transactions() {
    this.recentTransactions = [];
    this.recentTransactionsTableRow.forEach(recentTransactionsRow => {
      let rowData = {};
      recentTransactionsRow
        .$$("td")
        .forEach((recentTransactionsCell, columnIndex) => {
          if (columnIndex === 0) {
            rowData.status = recentTransactionsCell.getText();
          } else if (columnIndex === 1) {
            rowData.date = recentTransactionsCell.getText();
          } else if (columnIndex === 2) {
            rowData.description = recentTransactionsCell.getText();
          } else if (columnIndex === 3) {
            rowData.category = recentTransactionsCell.getText();
          } else if (columnIndex === 4) {
            rowData.amount = parseFloat(
              String(recentTransactionsCell.getText())
                .replace("USD", "")
                .replace(" ", "")
                .replace(",", "")
            );
          }
        });
      this.recentTransactions.push(rowData);
    });

    return this.recentTransactions;
  }

  /**
   *
   * @param {Array.Object} transactions
   * @return {Boolean} true if sorted in ascending order else false
   */
  sortTransactions(transactions) {
    return transactions.sort((a, b) => {
      if (a.amount < b.amount) {
        return -1;
      }
      if (a.amount > b.amount) {
        return 1;
      }
      return 0;
    });
  }
}

module.exports = new Dashboard();
