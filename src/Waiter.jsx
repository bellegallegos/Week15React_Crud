

const waiter = () => {
    const names = ['Paulina', 'Christina', 'Jenni', 'Shelly', 'Cassee', 'Jenn', 'Jake', 'Dulce'];
    const int = Math.floor(Math.random() * 8);
    return names[int];

 
}

export default waiter