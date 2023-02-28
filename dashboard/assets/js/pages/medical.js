{
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /*
     *
     * 상황별 preview 가져오기
     *
     **/
    const name = new URLSearchParams(location.search).get("preview");

    switch (name) {
      case "popup-info_search":
        modalInfoSearch();
        break;
    }
  }
}
