import { ITranslate } from "../itranslate";
import { Locale } from "../locales";

export class MenuComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`header-menu-${Locale.enUs}`]: "MAIN NAVIGATION",
    [`header-menu-${Locale.ptBR}`]: "MENU DO SISTEMA",

    [`register-${Locale.enUs}`]: "Registers",
    [`register-${Locale.ptBR}`]: "Cadastros",

      [`people-${Locale.enUs}`]: "People",
      [`people-${Locale.ptBR}`]: "Pessoas",

        [`person-type-${Locale.enUs}`]: "Person type",
        [`person-type-${Locale.ptBR}`]: "Tipo de pessoa",

        [`person-gender-${Locale.enUs}`]: "Person gender",
        [`person-gender-${Locale.ptBR}`]: "Genero de pessoa",

        [`person-${Locale.enUs}`]: "Person",
        [`person-${Locale.ptBR}`]: "Pessoa",

      [`product-${Locale.enUs}`]: "Products",
      [`product-${Locale.ptBR}`]: "Produtos",

        [`product-feature-${Locale.enUs}`]: "Feature",
        [`product-feature-${Locale.ptBR}`]: "Característica",

        [`product-group-${Locale.enUs}`]: "Group",
        [`product-group-${Locale.ptBR}`]: "Grupo",

        [`product-sub-group-${Locale.enUs}`]: "Sub group",
        [`product-sub-group-${Locale.ptBR}`]: "Sub grupo",

        [`product-${Locale.enUs}`]: "Product",
        [`product-${Locale.ptBR}`]: "Produto",

      [`transaction-${Locale.enUs}`]: "Transactions",
      [`transaction-${Locale.ptBR}`]: "Movimentos",

        [`purchase-order-${Locale.enUs}`]: "Purchase order",
        [`purchase-order-${Locale.ptBR}`]: "Ordem de compra",

        [`sale-order-${Locale.enUs}`]: "Sale order",
        [`sale-order-${Locale.ptBR}`]: "Ordem de venda",

        [`product-check-in-${Locale.enUs}`]: "Stock entry",
        [`product-check-in-${Locale.ptBR}`]: "Entrada em estoque",

        [`product-check-out-${Locale.enUs}`]: "Out-of-stock",
        [`product-check-out-${Locale.ptBR}`]: "Saída em estoque",

        [`cash-flow-${Locale.enUs}`]: "Chash flow",
        [`cash-flow-${Locale.ptBR}`]: "Fluxo de caixa",

    [`report-${Locale.enUs}`]: "Reports",
    [`report-${Locale.ptBR}`]: "Relatórios",

    [`help-${Locale.enUs}`]: "Help",
    [`help-${Locale.ptBR}`]: "Ajuda",

      [`system-${Locale.enUs}`]: "System",
      [`system-${Locale.ptBR}`]: "Sistema",

        [`about-${Locale.enUs}`]: "About",
        [`about-${Locale.ptBR}`]: "Sobre",
  };
}
