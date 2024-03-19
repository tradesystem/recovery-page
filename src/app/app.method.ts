class AppMethods {
    constructor() {

    }


    public removeDuplicates = (dados: string[]) => {
        return dados
          ?.filter((element, index) => {
            return dados.indexOf(element) === index;
          })
          .filter((e) => e);
    };
}

export default AppMethods;