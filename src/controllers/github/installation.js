module.exports = async (event, context) => {
    console.log("Yeah activated!");
    const body = JSON.parse(event.body);
    console.log(body);

    
};
