function Calificacion(final, asistencia)
{
    if(asistencia>=80)
    {
        if(final>=3){
            return console.log(`El estudiante Aprobó`);
        }else {
            return console.log(`El estudiante Reprobó`);
        }
    }else
    {
        return console.log(`El estudiante Reprobó`);
    }
}

Calificacion(4,80);