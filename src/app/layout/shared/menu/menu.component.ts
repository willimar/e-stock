import { MenuDetail } from './../../../models/layout/menu/MenuDetail';
import { Component, OnInit } from '@angular/core';
import { MenuComponentHtml } from '../../../locales/translations/menu.component.html';
import { Translate } from '../../../locales/translate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  rootMenu: MenuDetail[] = [
    {
      classImage: 'nav-icon fa fa-list-alt',
      label: 'Register',
      actionRouter: 'register',
      menuItems: [
        {
          classImage: 'nav-icon fa fa-users',
          label: 'People',
          actionRouter: 'people',
          menuItems:[
            {
              classImage: 'nav-icon fa fa-address-card',
              label: 'Person type',
              actionRouter: 'person-type',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fa fa-flag',
              label: 'Person gender',
              actionRouter: 'person-gender',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fas fa-user-friends',
              label: 'Person',
              actionRouter: 'person',
              menuItems:[]
            }
          ]
        },
        {
          classImage: 'nav-icon fa fa-microchip',
          label: 'Product',
          actionRouter: 'product',
          menuItems:[
            {
              classImage: 'nav-icon fa fa-cubes',
              label: 'Feature',
              actionRouter: 'product-feature',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fa fa-object-group',
              label: 'Group',
              actionRouter: 'product-group',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fa fa-object-group',
              label: 'Sub group',
              actionRouter: 'product-sub-group',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fa fa-archive',
              label: 'Product',
              actionRouter: 'product',
              menuItems:[]
            }
          ]
        },
        {
          classImage: 'nav-icon fa fa-sitemap',
          label: 'Transaction',
          actionRouter: 'transaction',
          menuItems:[
            {
              classImage: 'nav-icon fa fa-plug',
              label: 'Purchase order',
              actionRouter: 'purchase-order',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fa fa-shopping-cart',
              label: 'Sale order',
              actionRouter: 'sale-order',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fa fa-check-square-o',
              label: 'Product check in',
              actionRouter: 'product-check-in',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fa fa-square-o',
              label: 'Product check out',
              actionRouter: 'product-check-out',
              menuItems:[]
            },
            {
              classImage: 'nav-icon fa fa-credit-card',
              label: 'Chash flow',
              actionRouter: 'cash-flow',
              menuItems:[]
            }
          ]
        }
      ]
    },
    {
      classImage: 'nav-icon fa fa-share',
      label: 'Report',
      actionRouter: 'report',
      menuItems: []
    },
    {
      classImage: 'nav-icon fas fa-question-circle',
      label: 'Help',
      actionRouter: 'help',
      menuItems: [
        {
          classImage: 'nav-icon fa fa-laptop',
          label: 'System',
          actionRouter: 'system',
          menuItems:[
            {
              classImage: 'nav-icon far fa-address-card',
              label: 'About',
              actionRouter: 'about',
              menuItems:[]
            }
          ]
        }
      ]
    }
  ];

  translate: Translate = new Translate(new MenuComponentHtml());

  constructor() {
    console.log(this.rootMenu);
  }

  ngOnInit(): void {
  }

}
