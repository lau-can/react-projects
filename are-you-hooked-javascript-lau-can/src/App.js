import { useState } from "react";
import users from "./fake_data";

const App = () => {
    const [filteredEmployees, setFilteredEmployees] = useState(users);


    function handleSearch (e) {
    
        // const inputName = e.target.value.toLowerCase();
        // const result = [];
    
        // for (let index = 0; index < users.length; index++) { //parcurgem lista de useri
        //     const user = users[index].name; //userul de la iteratia curenta
        //     if (user.toLowerCase().includes(inputName)) { //verificam numele de la iteratia curenta 
        //             //contine ce avem in input
        //             console.log(user);  
        //             result.push(users[index]);
        //         }
        // }  
        // setFilteredEmployees(result);      
        let tempUsers = [...users];
        setFilteredEmployees(tempUsers.filter(name => name.name.toLowerCase().includes(e.target.value.toLowerCase())));
        
    }
    
    return (
        <>
            <header>
                <div className="container">
                    <h1 className="logo">Are you Hooked?</h1>
                </div>
            </header>

            <section>
                <div className="container">
                    <p className="error">Passwords do not match</p>
                    <p className="error">Password needs to be more complex</p>
                    <input
                        type="password"
                        placeholder="Enter your password"
                    />
                    <input
                        type="password"
                        placeholder="Verify your password"
                    />
                </div>
            </section>

            <section>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>
                                    <input  onChange={ (e) => handleSearch(e)}
                                            type="text"
                                            placeholder="Name..."
                                    />

                                </th>
                                <th>Age</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map(
                                (employee) => (
                                    <tr key={employee.id}>
                                        <th>{employee.id}</th>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>
                                            <button>
                                                -
                                            </button>
                                            <span>{employee.salary}</span>
                                            <button>
                                                +
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>
                        API provided by{" "}
                        <a href="http://www.dummy.restapiexample.com/">
                            Dummy sample REST API
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};


export default App;
