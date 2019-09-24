import React, {Component} from 'react';

class BuscarDatos extends Component {

	filterUpdate(){
		const val = this.myValue.value
		this.props.filterUpdate(val)
	}

	render(){

		const {data, filterText}= this.props;

		return(

			<div className="container">
			<h2>Buscar datos</h2>
				<header>
					<form>
						<input
							type="text"
							ref={(value) => this.myValue = value}
							placeholder="Introduce una web..."
							onChange={this.filterUpdate.bind(this)}
						/>
					</form>
				</header>
			    <table>
			     	<thead>
			     		<tr>
				          <th>#</th>
				          <th>Web</th>
				          <th>Usuario</th>
				          <th>Password</th>
				          <th>Email</th>
				          <th>Clave</th>
				          <th>Observaciones</th>
			     		</tr>
			     	</thead>
			     	<tbody>
				        {
				          this.props.data
				          .filter(name => {
				          	return name.web.toLowerCase().indexOf(filterText.toLowerCase()) >=0
				          })
				          .map((row,i) => (
				            <tr key={i}>
				              <td>{i+1}</td>
				              <td>{row.web}</td>
				              <td>{row.user}</td>
				              <td>{row.password}</td>
				              <td>{row.email}</td>
				              <td>{row.clave}</td>
				              <td>{row.observaciones}</td>
				            </tr>
				            ))
				        }
			     	</tbody>
			     </table>
   			</div>
		);
	}
}

export default BuscarDatos;