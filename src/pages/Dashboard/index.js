//eu gosto de dividir os componentes em quatro arquivos: index, component, container, styles
//index é responsável por exportar o componente
//component é responsável pela UI, pela parte visual da aplicação, pelo modo como as coisas são exibidas na tela
//container é responsável pela parte funcional. É nele que faço integrações com a API e crio as funções que necessito.
  //nem sempre um componente precisa de um container, pois nem todos os componentes fazem integrações com APIs
//styles é responsável pela estilização do meu componente. Ele é aplicado no arquivo component
export { default } from './Dashboard.component';