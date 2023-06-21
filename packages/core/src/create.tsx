import * as React from 'react'
import type { UserComponent, UserComponentConfig } from '@craftjs/core'
import { useNode } from '@craftjs/core'

/** 物料类型 */
export type MaterialComponent = UserComponent

/**
 * 物料组件, 透传 useNode Ref
 * @param WarpComponent 物料组件
 */
export function withMaterialNode<T = any>(WarpComponent: React.ComponentType<T>) {
    return React.forwardRef(function (props: T) {
        const { connectors: { connect, drag } } = useNode()
        return <WarpComponent ref={(dom: HTMLElement) => connect(drag(dom))} {...props} />
    })
}

/**
 * 创建React物料组件
 * @param component 物料组件
 * @param options 物料配置
 */
export function createReactMaterial<T>(component: MaterialComponent, options: Partial<UserComponentConfig<T>>) {
    component.craft = options
    return component as MaterialComponent
}