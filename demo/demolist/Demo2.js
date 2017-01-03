/**
 * @title 图标Badge
 * @description 在子元素里自定义内容
 */
class Demo2 extends Component {
	render(){
		return (
			<div>
			<Badge dataBadge={4} dataBadgePlacement="bottom">
				<Icon type="uf-bell"></Icon>
			</Badge>
			<Badge dataBadge={4} colors="warning" dataBadgePlacement="up">
				<Icon type="uf-bell"></Icon>
			</Badge>
			</div>
		)
	}
}