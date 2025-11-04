import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root',
})
export class usuarioService {
  private apiUrl = 'http://localhost:8080/api/api/usuarios';
  usuarios = signal<Usuario[]>([]);

  constructor(private http: HttpClient) {
    this.inicializarData();
  }

  // CRUD
  /* Obtener todos los Usuarios */
  findAll(): Observable<Usuario[]> {
    return this.http
      .get<Usuario[]>(this.apiUrl)
      .pipe(tap((data) => this.guardarEnLocalStorage(data)));
  }

  /*  Obtener usuario por ID - GET */
  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  /* Crear nuevo usuario - POST */
  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario).pipe(tap(() => this.cargarUsuarios()));
  }

  /* Actualizar usuario existente - PUT */
  update(usuario: Partial<Usuario>): Observable<Usuario> {
    return this.http
      .put<Usuario>(`${this.apiUrl}/${usuario.id_usuario}`, usuario)
      .pipe(tap(() => this.cargarUsuarios()));
  }

  /* Eliminar usuario - DELETE */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(tap(() => this.eliminarLocal(id)));
  }

  /* Buscar usuario por correo - GET */
  findByCorreo(correo: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/email/${correo}`);
  }

  /* Filtrar usuarios por rol */
  findByRol(rol: number): Observable<Usuario[]> {
    return this.http
      .get<Usuario[]>(`${this.apiUrl}/tipo/${rol}`)
      .pipe(tap((data) => this.guardarEnLocalStorage(data)));
  }

  // PERSISTENCIA
  private inicializarData() {
    const data = localStorage.getItem('usuarios');
    if (data) {
      this.usuarios.set(JSON.parse(data));
      console.log('Usuarios cargados desde localStorage');
    }

    this.cargarUsuarios();
  }

  /* Guardar signal + localStorage */
  private guardarEnLocalStorage(data: Usuario[]) {
    this.usuarios.set(data);
    localStorage.setItem('usuarios', JSON.stringify(data));
  }

  /* Cargar usuarios backend */
  cargarUsuarios() {
    this.http.get<Usuario[]>(this.apiUrl).subscribe({
      next: (data) => this.guardarEnLocalStorage(data),
      error: (err) => console.error('Error al cargar usuarios desde el backend', err),
    });
  }

  /* Eliminar usuario localmente */
  private eliminarLocal(id: number) {
    const updated = this.usuarios().filter((u) => u.id_usuario !== id);
    this.guardarEnLocalStorage(updated);
  }
}
