/**
 * @title 图标Badge
 * @description 在子元素里自定义内容
 */
class Demo2 extends Component {
	render(){
		return (
			<div>
				<Badge colors="warning" dataBadge={4} dataBadgePlacement="bottom">
					<i className="uf uf-bellmusicaltool"></i>
				</Badge>
				<Badge colors="primary" dataBadge={20} dataBadgePlacement="top">
					<i className="uf uf-bellmusicaltool"></i>
				</Badge>
			</div>
		)
	}
}