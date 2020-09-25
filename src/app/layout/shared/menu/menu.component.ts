import { MenuDetail } from './../../../models/layout/menu/MenuDetail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  rootMenu: MenuDetail[] = [
    {
      classImage: 'fa fa-list-alt',
      label: 'Register',
      actionRouter: 'register',
      menuItems: [
        {
          classImage: 'fa fa-users',
          label: 'People',
          actionRouter: 'people',
          menuItems:[
            {
              classImage: 'fa fa-address-card',
              label: 'Person type',
              actionRouter: 'person-type',
              menuItems:[]
            },
            {
              classImage: 'fa fa-flag',
              label: 'Person gender',
              actionRouter: 'person-gender',
              menuItems:[]
            },
            {
              classImage: 'fa fa-id-card-o',
              label: 'Person',
              actionRouter: 'person',
              menuItems:[]
            }
          ]
        },
        {
          classImage: 'fa fa-microchip',
          label: 'Product',
          actionRouter: 'product',
          menuItems:[
            {
              classImage: 'fa fa-cubes',
              label: 'Feature',
              actionRouter: 'product-feature',
              menuItems:[]
            },
            {
              classImage: 'fa fa-object-group',
              label: 'Group',
              actionRouter: 'product-group',
              menuItems:[]
            },
            {
              classImage: 'fa fa-object-group',
              label: 'Sub group',
              actionRouter: 'product-sub-group',
              menuItems:[]
            },
            {
              classImage: 'fa fa-archive',
              label: 'Product',
              actionRouter: 'product',
              menuItems:[]
            }
          ]
        },
        {
          classImage: 'fa fa-sitemap',
          label: 'Transaction',
          actionRouter: 'transaction',
          menuItems:[
            {
              classImage: 'fa fa-plug',
              label: 'Purchase order',
              actionRouter: 'purchase-order',
              menuItems:[]
            },
            {
              classImage: 'fa fa-shopping-cart',
              label: 'Sale order',
              actionRouter: 'sale-order',
              menuItems:[]
            },
            {
              classImage: 'fa fa-check-square-o',
              label: 'Product check in',
              actionRouter: 'product-check-in',
              menuItems:[]
            },
            {
              classImage: 'fa fa-square-o',
              label: 'Product check out',
              actionRouter: 'product-check-out',
              menuItems:[]
            },
            {
              classImage: 'fa fa-credit-card',
              label: 'Chash flow',
              actionRouter: 'cash-flow',
              menuItems:[]
            }
          ]
        }
      ]
    },
    {
      classImage: 'fa fa-share',
      label: 'Report',
      actionRouter: 'report',
      menuItems: []
    },
    {
      classImage: 'fa fa-question-circle-o',
      label: 'Help',
      actionRouter: 'help',
      menuItems: [
        {
          classImage: 'fa fa-laptop',
          label: 'System',
          actionRouter: 'system',
          menuItems:[
            {
              classImage: 'fa fa-building-o',
              label: 'About',
              actionRouter: 'about',
              menuItems:[]
            }
          ]
        }
      ]
    }
  ];

  constructor() {
    console.log(this.rootMenu);
  }

  ngOnInit(): void {
  }

}
