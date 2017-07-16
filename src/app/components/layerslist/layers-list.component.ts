import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { EsriLoaderService } from 'angular-esri-loader';
import store from '../../store';
import  "../../../assets/libs/ztree/jquery.ztree.all.min";
declare global {
    interface Window {
        $: any;
    }
}
@Component({
    selector: 'layers-list',
    templateUrl: './layers-list.component.html',
    styleUrls: ['./layers-list.component.css'],
    animations: [
        trigger('signal', [
            state('go', style({
                'height': '300px'
            })),
            state('stop', style({
                'height': '0px'
            })),

            transition('* => *', animate(500))
        ])
    ]
})

export class LayersListComponent {
    showTreeContainer: boolean = false;
    zTreeObj: any;
    signal: string;
    constructor(private esriLoader: EsriLoaderService) { }

    ngOnInit() {
        // this.esriLoader.loadModules([
            
        // ]).then(([]) => {
            if (!this.zTreeObj) {
                var setting = {
                    check: {
                        enable: true,
                        autoCheckTrigger: false
                        //autoCheckTrigger: true
                    },
                    callback: {
                        onCheck: this._zTreeOnCheck.bind(this)
                    },

                    data: {
                        simpleData: {
                            enable: true
                        }
                    },

                    view: {
                        showLine: false,
                        showIcon: true,
                        selectedMulti: true
                    }
                };
                var zNodes = [
                    { "id": 1, "pId": 0, "name": "图层", "checked": true },
                    { "id": 10, "pId": 1, "name": "地理信息", "checked": true },
                    { "id": 101, "pId": 10, "name": "地名", "layerId": "TDTAnnoLayer", "checked": true, "basemap": true },
                    { "id": 102, "pId": 10, "name": "边界", "layerId": "BoundariesLayer", "checked": true, "basemap": true },
                    { "id": 11, "pId": 1, "name": "个人图层", "checked": true },
                ];
                this.zTreeObj = window.$.fn.zTree.init(window.$('#layersTree'), setting, zNodes);
            }

        // })
    }

    _zTreeOnCheck(event, treeId, treeNode) {
        var map = store.view.map;
        var items = [];
        if (treeNode.isParent) {
            items = this.getAllChildrenNodes(treeNode, []);
        } else {
            items.push(treeNode);
        }
        if (items.length > 0) {

            items.forEach(item => {
                var lyrId = item.layerId;
                if (item.basemap) {
                    map.basemap.baseLayers.items.forEach(element => {
                        if (element.id === lyrId) {
                            element.visible = treeNode.checked
                        }
                    });
                } else {
                    var lyr = map.findLayerById(lyrId);
                    lyr ? lyr.visible = treeNode.checked : null;
                }
            });
        }
    }

    switch(flg) {
        if (!flg) {
            this.signal = 'stop';
        } else {
            this.signal = 'go';
        }
    }

    getAllChildrenNodes(treeNode, result) {
        if (treeNode.isParent) {
            var childrenNodes = treeNode.children;
            if (childrenNodes) {
                for (var i = 0; i < childrenNodes.length; i++) {
                    if (childrenNodes[i].isParent) {
                        result = this.getAllChildrenNodes(childrenNodes[i], result);
                    } else {
                        result.push(childrenNodes[i]);
                    }
                }
            }
        }
        return result;
    }

    addNodeToTree(node) {
        var tree = this.zTreeObj;
        var parentNode = tree.getNodes()[1];
        node.checked = true;
        tree.addNodes(parentNode, node);
        tree.refresh();
    }
}