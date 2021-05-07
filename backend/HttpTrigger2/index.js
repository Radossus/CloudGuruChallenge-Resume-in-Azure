module.exports = async function (context, req, data) {
    console.log("Function has been triggered - Azure");
    context.bindings.outputDocument = data[0];
    context.bindings.outputDocument.counter += 1;
    context.res = {
       body: data[0].counter
  
    };
}
