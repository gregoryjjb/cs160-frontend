import React from 'react';
import {
    Drawer,
    DrawerHeader,
    DrawerContent
} from 'rmwc/Drawer';
import { SimpleListItem } from 'rmwc/List';

const ButtonPanel = ({}) => (
    <Drawer permanent>
        <DrawerContent style={{cursor: 'pointer'}} >
            <SimpleListItem graphic="add_circle_outline" text="New Video" />
            <SimpleListItem graphic="help" text="Help" />
        </DrawerContent>
    </Drawer>
)

export default ButtonPanel;