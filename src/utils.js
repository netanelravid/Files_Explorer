export const utils = {
  delay: async (miliseconds) => {
    return new Promise(resolve => {
      setTimeout(() => { resolve(); }, miliseconds);
    });
  },
  fetchJsonData: async (url) => {
    let response = null;
    while(response == null){
      try{
        response = await fetch(url);
      }
      catch(e) {
        await utils.delay(2000);
      }
    }

    let folderFromResponse = await response.json();
    return folderFromResponse;
  }
}
