class UserListComponent extends HTMLElement {
    connectedCallback() {
      this.fetchGitHubUsers();
    }
  
    async fetchGitHubUsers() {
      try {
        const response = await fetch('https://api.github.com/users');
        const users = await response.json();
        this.render(users);
      } catch (error) {
        console.error('Error fetching GitHub users:', error);
      }
    }
  
    render(users) {
      const shadow = this.attachShadow({ mode: 'open' });
  
      const table = document.createElement('table');
      table.style.borderCollapse = 'collapse';
      table.style.width = '30%';
  
      const tableHeader = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const headers = ['ID', 'Login'];
  
      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.border = '1px solid #dddddd';
        th.style.textAlign = 'center';
        th.style.padding = '5px';
        headerRow.appendChild(th);
      });
  
      tableHeader.appendChild(headerRow);
      table.appendChild(tableHeader);
  
      const tableBody = document.createElement('tbody');
      users.forEach(user => {
        const row = document.createElement('tr');
  
        const idCell = document.createElement('td');
        idCell.textContent = user.id;
        idCell.style.border = '1px solid #dddddd';
        idCell.style.padding = '5px';
        row.appendChild(idCell);
  
        const loginCell = document.createElement('td');
        loginCell.textContent = user.login;
        loginCell.style.border = '1px solid #dddddd';
        loginCell.style.padding = '5px';
        row.appendChild(loginCell);
  
        tableBody.appendChild(row);
      });
  
      table.appendChild(tableBody);
      shadow.appendChild(table);
    }
  }
  
  customElements.define('user-list-component', UserListComponent);
  