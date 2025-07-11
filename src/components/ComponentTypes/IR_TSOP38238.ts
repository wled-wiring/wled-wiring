import {type Node} from '@xyflow/react';
import {ComponentDataType, ImageDataType, HandleDataType} from '../../types';

export const IR_TSOP38238: Node = {
    id: '',
    type: 'general-component-type',
    position: { x: 0, y: 0 },

    data: { 
        image: {url:"./IR_TSOP38238.jpg", width: 25, height: 81} as ImageDataType,
        technicalID: "IR_TSOP38238",
        name: "compData.IR_TSOP38238.name",
        description: "compData.IR_TSOP38238.descriptionShort",
        popover: {
            description: "compData.IR_TSOP38238.description",
        },
        technicalVersion: 1,
        group: "electronics",
        rotation: 0,
        borderWidth: 2,
        resizableX: false,
        rotatable: true,
        handles: [
            {
                borderColor: "green",
                borderLineWidth: 0.8,
                borderRadius: "20%",
                borderType: "dotted",
                description: "Output",
                functions: [
                    "dig_out"
                ],
                height: 10,
                hid: "OUT",
                name: "OUT",
                position: "left",
                postype: "bottom",
                tolVmax: 5,
                tolVmin: 0,
                type: "source",
                Vout: 3.3,
                width: 6,
                x: 1.5,
                xalign: "start",
                y: 76,
                yalign: "start",
                prefferedLineWidth: 1,
            } as HandleDataType,
            {
                borderColor: "black",
                borderLineWidth: 0.8,
                borderRadius: "20%",
                borderType: "dotted",
                description: "GND",
                functions: [
                    "gnd"
                ],
                height: 10,
                hid: "GND",
                name: "GND",
                position: "left",
                postype: "bottom",
                tolVmax: 0,
                tolVmin: 0,
                type: "source",
                Vout: 0,
                width: 6,
                x: 12.5,
                xalign: "start",
                y: 76,
                yalign: "start",
                prefferedLineWidth: 1,
            } as HandleDataType,
            {
                borderColor: "red",
                borderLineWidth: 0.8,
                borderRadius: "20%",
                borderType: "dotted",
                description: "Supply voltage",
                functions: [
                    "suppl_in"
                ],
                height: 10,
                hid: "3V3",
                name: "+3.3 V",
                position: "left",
                postype: "bottom",
                tolVmax: 3.6,
                tolVmin: 0,
                type: "source",
                Vout: 0,
                width: 6,
                x: 23,
                xalign: "start",
                y: 76,
                yalign: "start",
                prefferedLineWidth: 1,
            } as HandleDataType,
        ]
    } as ComponentDataType,
}